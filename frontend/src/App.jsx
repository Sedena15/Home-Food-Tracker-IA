import './App.css'

function App() {
 
  const alimentos = 
     [

      {  
       id: 1,
       nombre: "Arroz",
       cantidad: 500, 
       unidad: "g"
      },

      {
       id: 2,
       nombre: "Leche",
       cantidad: 5, 
       unidad: "l"
      },

      {
       id: 3,
       nombre: "Huevos",
       cantidad: 3, 
       unidad: "ud"

      },

      {
       id: 4,
       nombre: "Harina",
       cantidad: 250, 
       unidad: "g"
      }
    ]

  return (
    
    <main>
      <h1>Mi despensa</h1>
       <p>
         Gestiona tus alimentos y descubre qué puedes cocinar
       </p>
       <ul>
         {alimentos.map((alimento) => (
            <li key={alimento.id}>
                {alimento.nombre}: {alimento.cantidad} {alimento.unidad}
            </li>
  ))}
</ul>
     </main>
  )
}

export default App
