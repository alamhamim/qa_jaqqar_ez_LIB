var wait = function () {

    var dWaitTime = 40000;

    this.waitForElement = async function (element, waitTime) {
        if (waitTime == null) {
            waitTime = dWaitTime;
        }
        var sEle = $(element);
        await sEle.waitForDisplayed(waitTime).then(function (isDisplayed) {
            if (!isDisplayed) {
                throw new Error("Element not displayed");
            }
        })

    }
}
module.exports = new wait();