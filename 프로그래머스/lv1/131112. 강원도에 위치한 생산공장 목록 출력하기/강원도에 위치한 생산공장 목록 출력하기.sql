SELECT factory_id, factory_name, address
from food_factory
where substring_index(address, ' ', 1) = '강원도'
order by factory_id