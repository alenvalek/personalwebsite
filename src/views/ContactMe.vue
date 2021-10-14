<template>
   <div class="flex flex-col justify-center items-center">
      <h1 class="mt-10 text-white text-4xl	">
         Kontaktiraj me
      </h1>
      <form
         ref="form"
         class="flex flex-col m-20 space-y-5 w-1/2 mx-auto"
         @submit.prevent="sendEmail"
      >
         <input
            class="
               border border-gray-300
               px-3
               py-2
               rounded-lg
               shadow-sm
               focus:outline-none
               focus:border-indigo-500
               focus:ring
               focus:ring-indigo-500
               text-black
            "
            type="text"
            name="from_name"
            placeholder="Ime"
            required
            :model="name"
         />
         <input
            class="
               border border-gray-300
               px-3
               py-2
               rounded-lg
               shadow-sm
               focus:outline-none
               focus:border-indigo-500
               focus:ring
               focus:ring-indigo-500
               text-black
            "
            name="from_mail"
            required
            type="email"
            placeholder="E-mail"
            :model="email"
         />
         <textarea
            class="
               border border-gray-300
               px-3
               py-2
               rounded-lg
               shadow-sm
               focus:outline-none
               focus:border-indigo-500
               focus:ring
               focus:ring-indigo-500
               text-black
            "
            type="text"
            rows="6"
            placeholder="Poruka"
            name="message"
            required
            :model="message"
         />
         <button
            type="submit"
            class="
               py-2
               px-3
               bg-purple-400
               text-purple-900
               rounded-lg
               hover:bg-purple-300 hover:text-purple-800
               transition
               duration-300
               w-max
               mx-auto
               my-10
            "
         >
            <span>Pošalji</span>
         </button>
      </form>
   </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
   name: 'ContactMe',
   data() {
      return {
         email: '',
         message: '',
         name: '',
      };
   },
   methods: {
      async sendEmail() {
         if (!this.email || !this.message || !this.name) {
            this.$toast.open({
               type: 'error',
               message:
                  'Sva polja trebaju biti ispunjena inaće se vaš mail neće poslati 😓',
            });
         }

         try {
            await emailjs.sendForm(
               'service_yiv9uwi',
               'template_23zk5ph',
               this.$refs.form,
               'user_IeoVmVXc1erxbwMYsRWLe'
            );
            this.$toast.open({
               type: 'success',
               message: 'Uspješno ste poslali mail',
            });
            this.$refs.form.reset();
         } catch (err) {
            this.$toast.open({
               type: 'error',
               message: 'Dogodila se pogreška, vaš mail neće biti poslan 😓',
            });
         }
      },
   },
};
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
