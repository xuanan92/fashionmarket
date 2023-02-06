import React from "react"

export default function Homepage(props) {
  return (
    <div>
      <div className="h-auto relative flex justify-center">
        <img className="border-xl object-cover object-center h-[600px] w-[100vw] aspect-video" src="./brownfabric.jpg" alt="bannerfashion" />
        <div className="p-2 absolute bottom-[150px] text-center space-y-4">
          <h1>In this Summer, do you already have Skirts?</h1>
          <p>If not, why not choosing ONE here now?</p>
          <button className="p-4 px-8 border border-red-800 bg-red-400 rounded-xl" type="submit"><strong>VIEW COLLECTIONS</strong></button>
        </div>
      </div>
    </div>
  )
}
