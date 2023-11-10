<script setup>

</script>

<template>
  <div v-if="show" class="mask">
  <div class="modal">
    <article class="modal-container">
      <header class="modal-container-header">
			<span class="modal-container-title">
				<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
        </svg>
				{{mbtiType}} Information
			</span>
        <button class="icon-button" @click="close">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"></path>
          </svg>
        </button>
      </header>
      <section class="modal-container-body rtf">
        <p>Information here</p>
        <p>{{detail}}</p>
      </section>
    </article>
  </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props :{
    show : {},
    mbtiType : {
      type: String,
      required: true
    },
    detail : {
      type: String,
      required: true
    },
  },
  methods : {
    close() {
      this.$emit('close')
    }
  },
}

</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  white-space: pre-line;
}

a {
  color: inherit;
}

.modal-container {
  max-height: 400px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
  .modal-container {
    width: 90%;
  }
}

.modal-container-header {
  padding: 16px 32px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-container-title {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-weight: 700;
  font-size: medium;
}

.modal-container-title svg {
  width: 32px;
  height: 32px;
  color: rgba(30, 147, 57, 0.84);
}

.modal-container-body {
  padding: 24px 32px 51px;
  overflow-y: auto;
}

.rtf h1,
.rtf h2,
.rtf h3,
.rtf h4,
.rtf h5,
.rtf h6 {
  font-weight: 700;
}

.rtf h1 {
  font-size: 1.5rem;
  line-height: 1.125;
}

.rtf h2 {
  font-size: 1.25rem;
  line-height: 1.25;
}

.rtf h3 {
  font-size: 1rem;
  line-height: 1.5;
}

.rtf > * + * {
  margin-top: 1em;
}

.rtf > * + :is(h1, h2, h3) {
  margin-top: 2em;
}

.rtf > :is(h1, h2, h3) + * {
  margin-top: 0.75em;
}

.rtf ul,
.rtf ol {
  margin-left: 20px;
  list-style-position: inside;
}

.rtf ol {
  list-style: numeric;
}

.rtf ul {
  list-style: disc;
}

.icon-button {
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.15s ease;
}

.icon-button svg {
  width: 24px;
  height: 24px;
}

.icon-button:hover, .icon-button:focus {
  background-color: #dfdad7;
}

</style>