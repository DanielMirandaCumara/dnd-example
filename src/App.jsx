import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import User from "./User";

function App() {

  const[people, setPeople] = useState([
    {id: 'ab',name:'Jhon'},
    {id: 'cd',name:'Peter'},
    {id: 'xy',name:'Sue'},
  ])
  const HandleDrag = (event) => {
    console.log(people)
        const {active,over} = event
      //  console.log('Active', active.id)
      //  console.log('Over', over.id)

        const oldIndex = people.findIndex(person => person.id === active.id)
        const newIndex = people.findIndex(person => person.id === over.id)

       // console.log('oldIndex', oldIndex)
       // console.log('NewIndex', newIndex)

        const newOrder = arrayMove(people, oldIndex, newIndex)

        console.log(newOrder)
        setPeople(newOrder)
  }
  return(
    <div className="flex justify-center items-center">
      <div className="w-4/6">
      <DndContext collisionDetection={closestCenter} onDragEnd={HandleDrag}>
        <h1 className='text-2xl font-bold'>User List</h1>
        <SortableContext items={people} strategy={verticalListSortingStrategy}> 
                    {people.map((user) => (<User user={user} key={user.id}/>))}
        </SortableContext>
    </DndContext>
      </div>
    </div>
  )
  
}
export default App