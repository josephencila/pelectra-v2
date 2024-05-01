const getDaysInMonth = (selectedDate) => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth() + 1
    const days = new Date(year, month, 0).getDate()
    return days
}



const slicedYearAndMonth = (selectedAt) => {
    const sliced = new Date(selectedAt).toISOString().slice(0, 7).replace('T', ' ')
    return sliced
}




module.exports = {
    getDaysInMonth,
    slicedYearAndMonth
}