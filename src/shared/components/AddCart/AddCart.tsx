import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AddCart = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex flex-col gap-2 max-w-64 ">
      <div className="flex justify-between">
        <Button
          disabled={count === 1}
          className="w-full"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <span className="w-full flex items-center justify-center">{count}</span>
        <Button className="w-full" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <Button>Agregar al carrito</Button>
    </div>
  );
};
