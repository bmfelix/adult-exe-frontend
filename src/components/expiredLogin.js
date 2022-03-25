const expiredStorage = (key) => {
	const itemStr = localStorage.getItem(key)
    if (itemStr === null) {
        return false;
    }
    
    const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

export default expiredStorage