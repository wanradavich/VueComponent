<template>
  <div>
    <h2 class="contact-heading">Get in touch!</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <input
        v-model="formData.name"
        type="text"
        placeholder="Name"
        required
        class="form-input"
      />
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email"
        required
        class="form-input"
      />
      <textarea
        v-model="formData.message"
        placeholder="Message"
        required
        class="form-textarea"
      ></textarea>
      <button type="submit" class="form-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Send form data to backend service (e.g., Formspree)
        const response = await fetch("https://formspree.io/f/xqkrdznl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });
        if (response.ok) {
          // Form submission successful, clear form data and show success message
          this.formData = {
            name: "",
            email: "",
            message: "",
          };
          alert("Form submitted successfully!");
        } else {
          // Handle errors
          alert("Error submitting form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
      }
    },
  },
};
</script>

<style scoped>
.contact-heading {
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px #e1e1e1;
  animation: moveHeading 1.5s ease infinite alternate;
}
.contact-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-input,
.form-textarea,
.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-button {
  background-color: #7361ff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.form-button:hover {
  background-color: #5640ff;
}
@keyframes moveHeading {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
