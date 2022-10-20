<template>
    <header>
        <h1>Title</h1>
        <nav id="navigation">
            <RouterLink :to="{ name: 'home'}">Home</RouterLink>
            <RouterLink :to="{ name: 'about'}">About</RouterLink>
        </nav>
    </header>
</template>

<style lang="scss">
#navigation {
    display: flex;
    gap: 1 rem;
}
</style>

