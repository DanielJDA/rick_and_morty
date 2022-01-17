import React from "react"

const Pagination = ({ next, prev, onPrevious, onNext }) => {
  const handelPrevious = () => {
    onPrevious()
  }
  const handelNext = () => {
    onNext()
  }
  return (
    <div>
      <nav className="w-full my-4 flex space-x-2">
        {prev && <button className="px-2 py-1 border" onClick={handelPrevious}>Previous</button>}
        {next && <button className="px-2 py-1 border" onClick={handelNext}>Next</button>}
      </nav>
    </div>
  )
}
export default Pagination
