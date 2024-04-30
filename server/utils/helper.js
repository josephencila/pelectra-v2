const getDaysInMonth = (selectedDate) => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth() + 1
    const days = new Date(year, month, 0).getDate()
    return days
}



const extractYearAndMonth = (selectedDate) => {
    const extracted = new Date("2024-04-29 21:47:43.518+08").toISOString().slice(0, 7).replace('T', ' ')
    return extracted
}




module.exports = {
    getDaysInMonth,
    extractYearAndMonth
}