type inputdata = string | number;

function prosesdata(data:inputdata): string {
	if (typeof data === "string"){
		return data.toUpperCase();
	} else {
	return data.toFixed(2);
	}
}

console.log(prosesdata("Halo World"));
console.log(prosesdata(13563));
