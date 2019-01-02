<template>
    <div>
        <ul>
            <li><router-link to="/home" tag="strong" active-class="current">Home</router-link></li>
            <li><router-link to="/cart" active-class="current">Cart</router-link></li>
            <li><router-link to="/mine" active-class="current">Mine</router-link></li>
        </ul>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .current{color:#f00;font-weight:bold;}
</style>
