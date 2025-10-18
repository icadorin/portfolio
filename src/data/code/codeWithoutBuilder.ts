export const codeWithoutBuilder = {
  title: 'Sem o uso do Builder',
  code: `
// Construtor sem parâmetros + Setters (objeto mutável/inconsistente)
private User createUser(RegisterRequest request) {
    User user = new User();
    user.setEmail(request.getEmail());
    user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
    user.setFullName(request.getFullName());
    user.setRole(parseUserRole(request.getRole()));
    user.setStatus(User.UserStatus.ACTIVE);
    return userRepository.save(user);
}

// Construtor com parâmetros (ilegível)
private User createUser(RegisterRequest request) {
    User user = new User(
        request.getEmail(),
        passwordEncoder.encode(request.getPassword()),
        request.getFullName(),
        parseUserRole(request.getRole()),
        User.UserStatus.ACTIVE
    );

    return userRepository.save(user);
}`.trim(),
};
