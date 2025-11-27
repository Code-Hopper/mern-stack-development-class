import React, { useState } from 'react'

const AddLanguages = (props) => {

    let [languageForm, setLanguageForm] = useState({
        name: '',
        difficulty: '',
        duration: 0,
        scope: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target

        setLanguageForm(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(languageForm)

        let language = languageForm

        language.duration = language.duration + " months"

        language.scope = language.scope.split(",")

        console.log(language)

        props.setLanguagesArray((prev) => {
            return [...prev, language]
        })

        setLanguageForm({
            name: '',
            difficulty: '',
            duration: 0,
            scope: ''
        })

    }

    return (
        <div className='bg-gray-100 p-10'>
            {/* name, diffculties, scope[array], duration */}
            <h1 className='text-3xl font-bold text-center py-10'>Add Language Form</h1>
            <form onSubmit={handleSubmit} className='w-1/2 mx-auto'>
                <div className='flex flex-col gap-4'>
                    <input onChange={handleChange} name='name' value={languageForm.name} className='p-2 focus:ring-2 ring-blue-600 outline-none rounded transition-all' type="text" placeholder='Name/Title' />
                    <div className='flex items-center gap-3'>
                        <label htmlFor="">Please Select Difficulty Level : </label>
                        <select onChange={handleChange} name="difficulty" value={languageForm.difficulty} className='grow p-2 focus:ring-2 ring-blue-600 outline-none rounded transition-all bg-white'>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <input onChange={handleChange} name='scope' value={languageForm.scope} className='p-2 focus:ring-2 ring-blue-600 outline-none rounded transition-all' type="text" placeholder='Enter Scope/s seperate by , eg: mobile, web, desktop' />
                    <div className='flex gap-3 items-center'>
                        <label htmlFor="">Please Select Months(1 to 12) : </label>
                        <input onChange={handleChange} name='duration' className='grow' type="range" max={12} step={1} value={languageForm.duration} />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 my-3'>
                    <button type='submit' className='bg-green-400 font-bold transition-all hover:bg-green-500 px-3 py-1 rounded'>Add Language</button>
                    <button type='reset' className='bg-red-400 font-bold transition-all hover:bg-red-500 px-3 py-1 rounded'>Reset Form</button>
                </div>
            </form>
        </div>
    )
}

export default AddLanguages
