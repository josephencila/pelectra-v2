const getDaysInMonth = (selectedDate) => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth() + 1
    const days = new Date(year, month, 0).getDate()
    return days
}










module.exports = {
    getDaysInMonth
}