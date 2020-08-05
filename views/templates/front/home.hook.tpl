<!-- rssFeed Start -->
<div class="rssFeed">
    <h3 class="rssFeed__title">{l s='The Last News' mod='rssFeedActuality'}</h3>
    <p class="rssFeed__subtitle">{l s='The last news of' mod='rssFeedActuality'} {$shop_name}</p>
    
    {if isset($rss_display_link) && $rss_display_link}
    <div id="rssFeed__container"></div>
    {else}
        <p>{l s='Please fill the rss link' mod='rssFeedActuality'}</p>
    {/if}
</div>

<script type="text/javascript">
$(document).ready(function() {
    rssFeedDisplay("{$rss_display_link}");
});
</script>
{* rssFeed End *}