-- 코드를 입력하세요
SELECT fh.flavor
from first_half fh, icecream_info ii
where fh.flavor = ii.flavor AND fh.total_order > 3000 AND ii.ingredient_type = "fruit_based"
order by fh.total_order desc;