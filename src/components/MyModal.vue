

<template>
  <div class="modal">
    <div class="card1">
    <div class="modal-content">
      <p>{{ content }}</p>
    </div>
      <div class="go-corner" @click="closeModal">
        <div class="exit">
          ×
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal {
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

.modal p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666;
}

.card1 {
  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.go-corner {
  display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
    cursor: pointer;
}
.go-corner:active{
  filter: brightness(.8);
}

.exit {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans, serif;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #00838d;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #fff;
}

.modal-content:hover:before {
  transform: scale(21);
}

.modal-content:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

</style>