import React from 'react'

function SkillsPreview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color:resumeInfo?.themeColor
    }}
    >Education</h2>
    <hr style={{
        borderColor:resumeInfo?.themeColor
    }} />

    <div className='grid grid-cols-2 gap-3 my-4'>
        {resumeInfo?.skills.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'>{skill.name}</h2>
                <div className='h-2 bg-gray-200 w-[120px]'>
                    <div className='h-2'
                        style={{
                            backgroundColor:resumeInfo?.themeColor,
                            width:skill?.rating*20+'%'
                        }}
                    >
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SkillsPreview