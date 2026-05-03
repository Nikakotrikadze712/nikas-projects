//გაქვს textAnalyzer property: _text გააკეთე: setter text(value) უნდა იყოს string trim გააკეთე (საწყისი/ბოლო space წაიშალოს)(მოიძიეთ trim()) getter length() ტექსტის სიგრძე getter wordCount() რამდენი სიტყვაა getter isLong() true თუ 20+ სიმბოლოა
const textAnalyzer = {
    _text: '   hello world   ',
    set text(value) {
        if (typeof value === 'string') {
            this._text = value.trim()
        }
        else {
            console.log('არასწორი მნიშვნელობა')
        }
    },
    get length() {
        return this._text.length
    },
    get wordCount() {
        if (this._text === '') {
            return 0
        }
        return this._text.split(' ').length
    },
    get isLong() {
        return this._text.length >= 20
    }
}

console.log(textAnalyzer.length)
console.log(textAnalyzer.wordCount)
console.log(textAnalyzer.isLong)