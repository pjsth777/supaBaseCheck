using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Api.Data;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private readonly AppDbContext _context;

    public TodosController(AppDbContext context) => _context = context;

    [HttpGet]
    public async Task<ActionResult<List<TodoItem>>> Get() => await _context.Todos.ToListAsync();

    [HttpPost]
    public async Task<IActionResult> Create(TodoItem item)
    {
        _context.Todos.Add(item);
        await _context.SaveChangesAsync();
        return Ok(item);
    }
}