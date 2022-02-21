<template>
  <span class="typewriter">
  <slot></slot>
  <span
    class="typewriter-msg"
    :class='{"typewriter-selected":isFullErasing}'>{{ typing }}</span>
    <span class="typewriter-cursor" v-if="cursor">{{ cursorSymbol }}</span>
  </span>
</template>
<script lang="ts" setup>
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = 
      ["سختی!", "لذت!","تفریح!", "زندگی!", "کُدِنتو 🍊"];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0; // textArray index
let charIndex = 0; // character index

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingSpeed + 1100);
  }
}

</script>
<style>
.typewriter-selected{
  background-color: rgba(0,0,0,.1);
}
.typewriter-cursor{
    opacity: 1;
    animation: blink 0.7s infinite;
    position: relative;
    top:-3px;
    left:-12px;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
</style>
