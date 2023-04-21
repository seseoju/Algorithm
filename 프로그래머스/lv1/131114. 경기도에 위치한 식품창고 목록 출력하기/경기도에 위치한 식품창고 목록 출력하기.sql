-- 코드를 입력하세요
SELECT warehouse_id, warehouse_name, address, ifnull(freezer_yn,'N') as freezer_yn
from food_warehouse
# where substring_index(address, ' ', 1) = '경기도'
where warehouse_name like '%경기%'
order by warehouse_id