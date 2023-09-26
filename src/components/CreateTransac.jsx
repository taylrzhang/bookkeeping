import '../App.css'
import { Link } from "react-router-dom";


export default function CreateTransac() {
  return (
    <>
      <div className='flex flex-row justify-between header my-6 place-self-center'>
      <h1 className='font-semibold'>Add</h1>
      <Link to="/account" className="btn">List</Link>
    </div>
      <hr />

      <form>
        <div className="mb-3">
          <label for="name" className="form-label">title</label>
          <input type="text" className="form-control" name="name" id="name" />
        </div>

        <div className="mb-3">
          <label for="date" className="form-label">time</label>
          <input type="date" className="form-control" name="time" id="time" />
        </div>

        <div className="mb-3">
          <label for="type" className="form-label">type</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="type"
            id="type"
          >
            <option value="income" selected>income</option>
            <option value="spending">spending</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="amount" className="form-label">amount</label>
          <input type="text" className="form-control" name="amount" id="amount" />
        </div>

        <div className="mb-3">
          <label for="note" className="form-label">note</label>
          <input type="text" className="form-control" name="note" id="note" />
        </div>
        
        <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">Save</button>
        </div>
      </form>
    </>
  )
  }