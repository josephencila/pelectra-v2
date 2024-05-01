export const sliceYearAndMonth = (selectedAt) => {
    const sliced = new Date(selectedAt).toISOString().slice(0, 7).replace('T', ' ')
    return sliced
}

