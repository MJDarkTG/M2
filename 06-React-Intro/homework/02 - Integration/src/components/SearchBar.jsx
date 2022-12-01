export default function SearchBar(props) {
   // console.log("mis props=");
   // console.log(props);
   const {onSearch} =props
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch("Futuro ID del peresonaje")}>Agregar</button>
      </div>
   );
}
