<template>
<p class="text-2xl text-gray-600 dark:text-gray-400">
  <slot></slot>
  <span class="typed-text">{{typedTextSpan}}</span><span :class="{'cursor': true, 'typing': isTyping}"> &nbsp;</span>
  </p>
</template>
<script lang="ts" setup>
const typedTextSpan = ref('');
const isTyping = ref(false)
const textArray = 
      ["هویت بصری", "چاپ و ست اداری","طراحی لوگو", "موشن دیزاینر", "طراح و گرافیست"];
const typingSpeed = 100;
const erasingSpeed = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0; // textArray index
let charIndex = 0; // character index

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    isTyping.value = true
    typedTextSpan.value = textArray[textArrayIndex].substring(0 , charIndex + 1);
    charIndex++;
    setTimeout(type, typingSpeed);
  } 
  else {
    isTyping.value = false
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    isTyping.value = true
    typedTextSpan.value = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } 
  else {
    isTyping.value = false
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingSpeed + 1100);
  }
}

onMounted(() => setTimeout(type, newTextDelay + 250))

</script>
<style>
span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-right: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0%  { background-color: #ccc; }
  49% { background-color: #ccc; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100%  { background-color: #ccc; }
}
</style>
