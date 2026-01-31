import { describe, it, expect, vi, beforeEach } from "vitest";
import { ProductoController } from "../../src/controllers/productos.controller.js";
import { Producto } from "../../src/models/Producto.model.js";

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
    req = {};
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
  });
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
  it("debería llamar a next si ocurre un error", async () => {
    const error = new Error("Error DB");

    Producto.findAll.mockRejectedValue(error);

    await ProductoController.getAllProductos(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
