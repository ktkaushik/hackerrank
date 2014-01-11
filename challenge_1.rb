#!/bin/ruby
# Head ends here
def pairs(a,k)
  # a is the array with all the values whereas k is the difference value required
  a.combination(2).to_a.keep_if {|x| (x[0] - x[1]).abs == k }.size
end

# Tail starts here
first_inputs = gets.strip.split(" ").map! {|i| i.to_i}

# difference value between the arrays
diff = first_inputs[1]

# values submitted 
values = gets.strip.split(" ").map! {|i| i.to_i}

puts pairs(values, diff)
