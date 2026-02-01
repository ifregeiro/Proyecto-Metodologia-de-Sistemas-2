import { describe, it, expect, vi, beforeEach } from "vitest";
import { ProductoController } from "../../src/controllers/productos.controller.js";
import { Producto } from "../../src/models/Producto.model.js";

//Mock Producto
vi.mock("../../src/models/Producto.model.js", () => ({
  Producto: {
    findAll: vi.fn(),
    findByPk: vi.fn(),
    create: vi.fn(),
    destroy: vi.fn(),
    update: vi.fn(),
  },
}));

describe("ProductoController", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    next = vi.fn();

    vi.clearAllMocks();
  });

//getAllProductos
  it("debería devolver todos los productos", async () => {
    const mockProductos = [
      { id_prod: 1, nombre: "Alcohol" },
      { id_prod: 2, nombre: "Ibuprofeno" },
    ];

    Producto.findAll.mockResolvedValue(mockProductos);

    await ProductoController.getAllProductos(req, res, next);

    expect(Producto.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockProductos);
  });

  it("debería llamar a next si ocurre un error en getAllProductos", async () => {
    const error = new Error("Error DB");

    Producto.findAll.mockRejectedValue(error);

    await ProductoController.getAllProductos(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });

//getProductoById
  it("debería devolver un producto por id si existe", async () => {
    const mockProducto = {
      id_prod: 1,
      nombre: "Paracetamol",
    };

    req.params.id = "1";

    Producto.findByPk.mockResolvedValue(mockProducto);

    await ProductoController.getProductoById(req, res, next);

    expect(Producto.findByPk).toHaveBeenCalledWith("1", {
      include: expect.any(Array),
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockProducto);
  });

  it("debería devolver 404 si el producto no existe", async () => {
    req.params.id = "99";

    Producto.findByPk.mockResolvedValue(null);

    await ProductoController.getProductoById(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "Producto no encontrado",
    });
  });

//createProducto
  it("debería crear un producto correctamente", async () => {
    req.body = {
      nombre: "Vitamina C",
      descripcion: "Suplemento vitamínico",
      precio: 3500,
      stock: 20,
      id_cat: 1,
      id_subcat: 2,
    };

    const mockProductoCreado = {
      id_prod: 10,
      ...req.body,
    };

    Producto.create.mockResolvedValue(mockProductoCreado);

    await ProductoController.createProducto(req, res);

    expect(Producto.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockProductoCreado);
  });

  it("debería devolver 500 si ocurre un error al crear el producto", async () => {
    req.body = {
      nombre: "Vitamina D",
      precio: 4000,
    };

    Producto.create.mockRejectedValue(new Error("Error DB"));

    await ProductoController.createProducto(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Ocurrió un error al momento de crear el producto ",
    });
  });
});
