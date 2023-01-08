function solution(today, terms, privacies) {
    const now = new Date(today)
    now.setHours(now.getHours() + 9)
    const result = []
    
    const types = {}
    terms.forEach((term) => {
        const [type, month] = term.split(" ")
        types[type] = Number(month)
    })
    
    privacies.forEach((privacy, i) => {
        const [_date, type] = privacy.split(" ")

        const date = new Date(_date)
        date.setMonth(date.getMonth() + types[type])
        
        if (now > date) result.push(i + 1)
    })
    
    return result;
}