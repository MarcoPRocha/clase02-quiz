export class Quiz {
    constructor (questions){
        this.questions = questions 
        this.score = 0
        this.questionIndex = 0
    }

    getCurrentQuestion (){
        return this.question[this.questionIndex]
    }

    continue (answer){
       if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++
    }
        this.questionIndex++
    }

    isEnded () {
        return this.question.length === this.questionIndex
    }

}