import utils from 'utils';
import form from '../../data/form.js';
import reference from '../../data/reference.js';

const getOptionsfromRefence = (key) => {
    return reference[key];
};


const helpers = {
    
    form: form,
    reference: reference,
    getOptions: (component) => {
        const defaultOptions = [{ data: 'N/A', label: 'N/A', code: 'N/A', name: 'N/A'}];
        let options;
        // component has source
        if (component.source) {
            // component.source example; reference:salutation
            // follows source:key pattern
            let tmp = component.source.split(":");
            let source = tmp[0],
                key = tmp[1];
            
            switch (source) {
                case 'reference':
                    options = getOptionsfromRefence(key);    
                break;
                // handle other cases here            
                default:
                    options = getOptionsfromRefence(key);
            }
            
        } else if (component.options) {
            // when options prop is enabled, field names for select component is {label, data} rather than {code, name}
            // transform { label, data } => { code, name }
            options = component.options.map(arr => ({ code: arr.data, name: arr.label }));
        }

        return options || defaultOptions;        
    },
    
    camelize: (str) => {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
          if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
          return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
    },
    makeKey: (value) => {
        return value.trim().replace(/[ ]/g, '').toLowerCase();
    },
    hasOP: (rP, arr) => {
        var temp = false;

		if(!(typeof rP === 'undefined') && rP != null) {
            var x = 'rP';
            var cnt = 0;

            if(typeof arr === 'string')  arr = [arr];

            for(var i = 0; i < arr.length; i++) {
                if(eval(x + '.hasOwnProperty(\'' + arr[i].split('[')[0] + '\') && !(typeof ' + x + '.' + arr[i] + ' === \'undefined\') && ' + x + '.' + arr[i] + ' != null')){
                    x += '.' + arr[i];
                    cnt++;
                }
            }

            if(cnt == arr.length) {
                temp = true;
            }
		}

		return temp;
    },
    getOP: (rP, arr) => {
		var temp = null;

		if(!(typeof rP === 'undefined') && rP != null) {
            var x = 'rP';
            var cnt = 0;

            if(typeof arr === 'string') arr = [arr];

            for(var i = 0; i < arr.length; i++) {
                if(eval(x + '.hasOwnProperty(\'' + arr[i].split('[')[0] + '\') && !(typeof ' + x + '.' + arr[i] + ' === \'undefined\') && ' + x + '.' + arr[i] + ' != null && ' + x + '.' + arr[i] + ' != \'\'')){
                    x += '.' + arr[i];
                    cnt++;
                }
            }

            if(cnt == arr.length) {
                temp = eval(x);
            }
		}

		return temp;
	},
    NA: (value) => {
        if (!(typeof value === 'undefined') && value != null && value.trim() != '' ) {
            return value;
        }
        else {
            return 'N/A';
        }
    },
    iterateNA: (data, cb) => {
        for(var key in data) {
            if(typeof data[key] === 'string' && data[key] == '') {
                data[key] = 'N/A';
            }
            else if(typeof data[key] === 'object') {
                helpers.iterateNA(data[key], cb => {
                    data[key] = cb;
                });
            }
        }

        cb(data);
    },
    mmddyyyy: (value) => {
        if(!(typeof value === 'undefined')) {
            var d = new Date(value);

            var dd = d.getDate();
            var mm = d.getMonth() + 1;

            var yyyy = d.getFullYear();
            if(dd < 10){
                dd = '0' + dd;
            } 
            if(mm < 10){
                mm = '0' + mm;
            } 
            d = mm + '/' + dd + '/' + yyyy;
            return d;
        }
        else {
            return 'N/A';
        }
    },
    yyyymmdd: (value) => {
        if(!(typeof value === 'undefined')) {
            var d = new Date(value);

            var dd = d.getDate();
            var mm = d.getMonth() + 1;

            var yyyy = d.getFullYear();
            if(dd < 10){
                dd = '0' + dd;
            } 
            if(mm < 10){
                mm = '0' + mm;
            } 
            d = yyyy + '-' + mm + '-' + dd;
            return d;
        }
        else {
            return 'N/A';
        }
    },
    addDays: (value, days) => {
        var date = new Date(value);
        date.setDate(date.getDate() + days);
        return date;
    },
    getTime: (value) => {
        if(!(typeof value === 'undefined')) {
            var d = new Date(value.replace('Z', ''));

            var hours = d.getHours();
            var minutes = d.getMinutes();
            var ampm = (hours >= 12) ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }
        else {
            return 'N/A';
        }
    },
    toMoney: (value) => {
        if(!(typeof value === 'undefined') && value != null) {
            return (parseFloat(value).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            return 'N/A';
        }
    },
    checkModules: tags => {
        let valid = 0;

        tags.map((tag, i) => {
            helpers.getUserInfo().modules.map((moduleCode, j) => {
                if(moduleCode == tag) {
                    valid++;
                }
            });
        });

        return (valid > 0) ? true : false;
    },
    stopPropagation: event => {
        event.stopPropagation();
    },
    getParameterByName: (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    getUserInfo: () => {
        let userInfo = null;
        if(sessionStorage.getItem('pruone_user_info') != null) {
            userInfo = JSON.parse(sessionStorage.getItem('pruone_user_info'));
        } else {
            userInfo = {
                name: 'test'
            };
        }
        return userInfo;
    },
    setUserInfo: _userInfo => {
        if(_userInfo == null) {
            sessionStorage.removeItem('pruone_user_info');    
        }
        else {
            sessionStorage.setItem('pruone_user_info', JSON.stringify(_userInfo));
        }
    },
    getPruForms: () => {
        return utils.form;
    },
    setPruForms: form => {
        utils.form = form;
    },
    fetch: (api, payload, cb, cbErr) => {
        let headers = {
            'cache-control': 'no-cache',
            'no-store': 'true',
            'must-revalidate': 'true',
            'pre-check': '0',
            'post-check': '0',
            'max-age': '0',
            's-maxage': '0',
            'Expires': '0',
            'Pragma': 'no-cache',
            'content-type': 'application/json'
        }

        // if(helpers.getUserInfo() != null) {
        //     headers.etagege = helpers.encrypt(helpers.getUserInfo().username);
        // }

        fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(result => {
            if(result.statusCode == 0 || result.statusCode == 1) {
                cb(result);
            }
            else {
                helpers.setUserInfo(null);
                sessionStorage.setItem('statusCode', result.statusCode);
                window.location.href = '/';
            }
        })
        .catch(err => {
            console.log(err);

            if(!(typeof cbErr === 'undefined')) {
                cbErr(err);
            }
        });
    },
    isMobile: () => {
        var check = false;
        ((a) => { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    toMoneyWithCurrency: (currency, value) => {
       
        let curr;
       
        if(!(typeof value === 'undefined')) {
           
            if(currency.trim() === "PHP") {
                curr = '₱';
            } else if(currency.trim() === 'USD') {
                curr = '$';
            }

            let money = curr + ' ' + (parseFloat(value).toFixed(5)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
            return money;
        }
        else {
            return '';
        }
    },
    MMddyyyy: (value) => {

        let wordMonth = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        if(!(typeof value === 'undefined')) {
            var d = new Date(value);

            var dd = d.getDate();
            var mm = d.getMonth();

            var yyyy = d.getFullYear();
            if(dd < 10){
                dd = '0' + dd;
            } 
            if(mm < 13){
                mm = wordMonth[mm];
            } 
            d = mm + ' ' + dd + ', ' + yyyy;
            return d;
        }
        else {
            return '';
        }
    },
    loadingBody: (show) => {
        if(show) {    
            var loader = document.createElement('div');
            loader.id = 'loading_wrapper';
            loader.className = 'loading-wrapper';
            loader.innerHTML = '<span class="fas fa-circle-notch rotating"></span>';
            document.getElementById("dc-content").appendChild(loader);
            // document.getElementById("policy-details-content").appendChild(loader);
        }
        else {
            var loader = document.getElementById('loading_wrapper');

            if(!(typeof loader === 'undefined') && loader != null) {
                document.getElementById("dc-content").removeChild(loader);
                // document.getElementById("policy-details-content").removeChild(loader);
                
            }
        }
    }
}

export default helpers;