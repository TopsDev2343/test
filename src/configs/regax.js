const regax = {
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    Name: /^.{3,}$/,
    Phone: /^(0)?09\d{9}$/,
    Pass: /.{8,}/
}
export default regax;