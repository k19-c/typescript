import { useContext } from "react"
import { ThemeContext1 } from "./ThemContext";


export const Box1 = () => {

    const theme = useContext(ThemeContext1);

  return <div style={{backgroundColor: theme.primary.main}}>Theme context for sample</div>
}
