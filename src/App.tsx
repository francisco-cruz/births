
import { FormBirth } from "./FormBirth";
import { InputBirth } from "./InputBirth";

export default function App() {

  return (
    <div className="App">
      <FormBirth>
        < InputBirth legalAge="18" />
        <button type="submit"> submit</button>
      </FormBirth>
    </div>
  )
  }
