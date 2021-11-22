const counters = document.querySelectorAll('.counter');

const counterSpeed = 200;

counters.forEach(counter => {
    const updateNumber = () => {
        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const incremment = target / counterSpeed;

        if(count < target) {
            counter.innerText = Math.ceil(count + incremment);
            setTimeout(updateNumber, 1);
        } else {
            count.innerText = target;
        }
    }

    updateNumber()
})