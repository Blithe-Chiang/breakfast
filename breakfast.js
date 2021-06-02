function delay(seconds) {
  return new Promise((res, _) => {
    setTimeout(res, seconds * 1000)
  })
}

async function fryEggs(howMany) {
  console.log('Warming the egg pan...')
  await delay(3)
  console.log(`cracking ${howMany} eggs`)
  await delay(3)
  console.log('Put eggs on plate')
  return "eggs"
}

async function fryBacon(slices) {
  console.log(`putting ${slices} slices of bacon in the pan`)
  console.log("cooking the first side of bacon...")
  await delay(3)
  for (let slice = 0; slice < slices; slice++) {
    console.log('flipping a slice of bacon')
  }
  console.log('cooking the second side of bacon...')
  await delay(3)
  console.log('Put bacon on plate')
  return "bacon"
}


async function prepareBreakFast() {
  const bacon = fryBacon(3)
  const eggs = fryEggs(3)

  return Promise.all([bacon, eggs])
}

export {prepareBreakFast}


