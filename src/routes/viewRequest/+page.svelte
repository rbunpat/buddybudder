<script lang="ts">
    import { enhance } from "$app/forms";
	import { nameList } from "$lib/namelist";
    export let form: any;
</script>

<div class="bg-white dark:bg-gray-900 full-height">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
		>
        ดูคำขอ Buddy
		</h2>
		<!-- <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
			บอกมาได้เลย!!
		</p> -->

		<label for="friendName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>เลือกชื่อ Buddy</label
		>
        <form class="space-y-8" method="POST" use:enhance>
            <select
			id="friendName"
            name="friendName"
            
            required
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option selected disabled>เลือกชื่อ Buddy</option>
            {#each nameList as name, i}
            <option value={i + 1}>{name}</option>
            {/each}

		</select>

        <button type="submit" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>


        </form>

	</div>
</div>

<style>
	.full-height {
		min-height: 100vh; /* This will make the div at least the height of the viewport */
		display: flex;
		flex-direction: column;
		justify-content: center; /* This will center the content vertically */
	}
</style>
