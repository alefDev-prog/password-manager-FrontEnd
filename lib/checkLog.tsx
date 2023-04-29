import Cookies from "js-cookie";
export default function checkLog():boolean {
  
    return Cookies.get('logged_in') !== undefined;
}
