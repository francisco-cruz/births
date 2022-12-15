import { useEffect } from "react";
import { FormControl } from "./components/FormControl";
import { Input } from "./components/Input";
import { Small } from "./components/Small";
import { validateBirth } from "./utils";


interface InputBirthProps {
  size: string | null
  borderRadius: string | null
  disabled: string | null
  legalAge: string | null
}

export function InputBirth({ size, borderRadius, disabled, legalAge, ...props }: InputBirthProps) {
  const init = () => {
    const input = document.getElementById("input-birth") as HTMLInputElement;
    const formControl = input.parentElement!;
    const small = formControl.getElementsByTagName("h4")[0] as HTMLHeadElement;
    const ageLegalValue: string = input.getAttribute("legal-age")!;
    const form = formControl.parentElement as HTMLFormElement;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateBirth(input, input.value, ageLegalValue)
      console.log(ageLegalValue);
      
    });

  }

  useEffect(() => {
    init();
  }, []);

  return (
    <FormControl>
      <Input
        id="input-birth"
        type="date"
        size={
          size === "default" || size === "small" || size === "large"
            ? size
            : "default"
        }
        radii={
          borderRadius === "1" ||
            borderRadius === "2" ||
            borderRadius === "3" ||
            borderRadius === "4" ||
            borderRadius === "5"
            ? borderRadius
            : "2"
        }
        disable={disabled === "true" ? disabled : "false"}
        legal-age={
          legalAge != ""
            ? legalAge
            : alert("Invalid legalAge field value")
        }
      />
      <Small />
    </FormControl>
  );
}
