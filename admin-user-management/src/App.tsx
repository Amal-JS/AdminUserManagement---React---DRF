
import {NextUIProvider} from "@nextui-org/react";
import './App.css'

import {Input} from "@nextui-org/react";

type Size = 'sm' | 'md'  | 'lg'

function App() {
  const sizes :Size[]= ["sm", "md", "lg"];
  return (
    <>
    <NextUIProvider>

    <div className="w-full flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input size={size} type="email" label="Email" />
          <Input size={size} type="email" label="Email" placeholder="Enter your email" />
        </div>
      ))}  
    </div>  
      </NextUIProvider>
    </>
  )
}

export default App
