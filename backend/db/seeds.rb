puts "🌱 Seeding Users..."
5.times do
    User.create(name: Faker::Name.name, password: "123")
end

puts "🌱 Seeding Notes..."

20.times do
    formats = ["Lecture", "Test", "Reading", "Online Resource", "Study Group"]

    Note.create(
        title: Faker::Lorem.paragraph_by_chars(number: 10, supplemental: false),
        content: Faker::Lorem.paragraph_by_chars(number: 30, supplemental: false),
        format: formats[rand(1..5)],
        difficulty: rand(1..5),
        user_id: rand(1..5) 
    )
end


    # Note.create(title: "Ruby Notes", content: "RUBY uses gems!!!!", format: "Lecture", difficulty: 2, user_id: 1)
    # Note.create(title: "Javascript Notes", content: "Javascript uses functions!!!", format: "Test", difficulty: 3, user_id: 2)
    # Note.create(title: "React Notes", content: "React uses components amazing!!", format: "Reading", difficulty: 4, user_id: 3)
    # Note.create(title: "SQL Notes", content: "SQL uses SQL", format: "Online Resource", difficulty: 5, user_id: 4)
    # Note.create(title: "AR Notes", content: "Active Record uses databases", format: "Study Group", difficulty: 6, user_id: 5)


puts "🌱 Seeding Comments..."

100.times do
    user = User.find(rand(1..5))
    Comment.create(name: user.name,  text: Faker::Lorem.paragraph_by_chars(number: 250, supplemental: false), user_id: user.id, note_id: rand(1..20))
end

puts "✅ Done seeding!"
