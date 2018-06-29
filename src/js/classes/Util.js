export default class Util {
	static btoa64(str) {
	    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
	        return String.fromCharCode('0x' + p1);
	    }));
	}
	static atob64(str) {
	    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
	        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	    }).join(''));
	}
	static ab2str(b) {
	    // return String.fromCharCode(...new Uint16Array(b));
	    console.log('len: ' + b.byteLength)
	    return Array.from(new Uint16Array(b)).map(n => {
	    	return String.fromCharCode(n);
	    }).join('');
	}
	static str2ab(s) {
		console.log('len: ' + s.length * 2)
	    var b = new ArrayBuffer(s.length * 2);
	    var bufView = new Uint16Array(b);
	    for (var i = 0, sLen = s.length; i < sLen; i++) {
	        bufView[i] = s.charCodeAt(i);
	        console.log(s.charCodeAt(i) === s.codePointAt(i));
	    }
	    return b;
	}
	static bytesToSize(bytes, precision = 2) {
	    const kilobyte = 1024;
	    const megabyte = kilobyte * 1024;
	    const gigabyte = megabyte * 1024;
	    const terabyte = gigabyte * 1024;

	    if ((bytes >= 0) && (bytes < kilobyte)) {
	        return bytes + ' B';
	    } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
	        return (bytes / kilobyte).toFixed(precision) + ' KB';
	    } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
	        return (bytes / megabyte).toFixed(precision) + ' MB';
	    } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
	        return (bytes / gigabyte).toFixed(precision) + ' GB';
	    } else if (bytes >= terabyte) {
	        return (bytes / terabyte).toFixed(precision) + ' TB';
	    } else {
	        return bytes + ' B';
	    }
	}
}