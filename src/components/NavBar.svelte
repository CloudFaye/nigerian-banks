<script lang="ts">

const navItems = [
    { name: 'Home' , href: '/', visible: true},
    { name: 'Twitter' , href: '/', visible: true},
    { name: 'Github' , href: '/', visible: true},
    { name: 'About' , href: '/', visible: true}
]

</script>

<nav>
    <ul>
        { #each navItems as item }
            {#if item.visible}
                <li><a class='btn' href="{item.href}">{item.name}</a></li>
            {/if}
        {/each}
    </ul>
</nav>

<style>
    nav {
        display: flex;
        position: fixed;
        justify-content: end;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        z-index: 10;
        
    }

    ul {
        list-style: none;
        padding: 20px;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        margin: 0 10px;
    }

    a { text-decoration: none;
         color: inherit; 
         
        }

    
     a:hover { text-decoration: line-through;
         background-color: rgba(255, 255, 255, 0.154);
         
        }

    @media only screen and (max-width: 600px) { nav { flex-direction: column; } } 
    @media only screen and (min-width: 600px) { nav { flex-direction: row; } } 
    @media only screen and (min-width: 768px) { nav { flex-direction: row; } } 
    @media only screen and (min-width: 992px) { nav { flex-direction: row; } } 
    @media only screen and (min-width: 1200px) { nav { flex-direction: row; } }
</style>