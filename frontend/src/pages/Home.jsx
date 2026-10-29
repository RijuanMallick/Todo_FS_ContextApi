import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import { useTodo } from '../context/TodoContext'


const Home = () => {
const {todo, input, setInput, addTodo} = useTodo()

    return (
        <>
            <Header />
            <div className='text-center my-10'>
                <input className='p-3 rounded w-64 bg-gray-200 me-2' type="text" value={input} placeholder='enter task'
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") addTodo() }} />
                <button className='p-2 bg-green-500 text-xl text-white rounded' onClick={addTodo}>Add</button>
            </div>
            <MainSection todo={todo}  />
            <Footer />
        </>
    )
}

export default Home