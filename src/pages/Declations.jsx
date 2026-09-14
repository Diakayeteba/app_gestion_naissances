import { DECLARATIONS } from "../utils";

function Declations() {
  return (
    <div className=" bg-white shadow-md rounded-md">
      <article className="grid grid-cols-12 items-center">
        <span className={`col-span-2  border-gray-300`}> Date </span>
        <span className={`col-span-2  border-gray-300 `}>Enfant</span>
        <span className={` col-span-2  border-gray-300`}>Date de nais.</span>
        <span className={` col-span-1  border-gray-300`}>Hopital</span>
        <span className={`col-span-2  border-gray-300  `}>Parent 1</span>
        <span className={`col-span-1  border-gray-300  `}>Parent 2</span>
        <span className={`col-span-1  border-gray-300  `}>Status</span>
        <span className={`col-span-1  border-gray-300  `}>ACTIONS</span>
      </article>

      {DECLARATIONS.map((item, index) => (
        <article key={item.id} className={`grid grid-cols-12 border-t border-gray-300 items-center ${
          index % 2 === 0? "bg-gray-200" : null
        }`}>
          <span className={`col-span-2  border-gray-300`}>{item.registered}</span>
          <span className={`col-span-2  border-gray-300`}>
            <span> {item.child.firstName} </span>
            <span> {item.child.lastName} </span>
          </span>

          <span className={`col-span-2  border-gray-300`}>
            {" "}
            {item.child.birthDate}
          </span>

          <span className={`col-span-1  border-gray-300`}>
            <span> {item.company.name} </span>
          </span>

          <span className={`col-span-2  border-gray-300`}>
            <span> {item.firsparent.firstName} </span>
            <span> {item.firsparent.lastName} </span>
          </span>
          <span className={` col-span-1  border-gray-300`}>
            <span> {item.seconParent.firstName} </span>
            <span> {item.seconParent.lastName} </span>
          </span>

          <span className={`col-span-1  border-gray-200`}>
            <span> {item.status} </span>
           
          </span >
          <span className={`col-span-1  border-gray-300`}>
           <span> ACTIONS </span>
           </span>
        </article>
      ))}
    </div>
  );
}

export default Declations;
