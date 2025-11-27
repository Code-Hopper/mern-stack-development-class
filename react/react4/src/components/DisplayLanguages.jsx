import React from 'react'

const DisplayLanguages = (props) => {
  return (
    <div id='display-grid' className='p-20 flex gap-3 flex-wrap'>
      {
        props.languagesArray.map((item) => {
          return (
            <div key={item.id} className='item p-2 border shadow min-w-[300px] h-[300px] rounded'>
              <ul className='flex flex-col gap-3'>
                <li className='text-2xl font-bold'>{item.name}</li>
                <li className='bg-orange-200 p-2 rounded'>{item.difficulty}</li>
                <li className='bg-green-200 p-2 rounded'>{item.duration}</li>
                <span className='font-bold'>Used For :</span>
                <li>
                  <ol className='ms-10 list-disc'>
                    {item.scope.map((item, index) => {
                      return (
                        <li key={index}>{item}</li>
                      )
                    })}
                  </ol>
                </li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayLanguages