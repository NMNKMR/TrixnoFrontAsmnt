import React from 'react'

export default function AllOptionsBtn({
    handleExpand=()=> {},
    optionName="",
    className=""
}) {
  return (
    <button onClick={handleExpand} className={`${className} py-2 px-4 rounded-full border-2 border-purple-700/50 text-deep-purple-900`}>
        All {optionName}
    </button>
  )
}
