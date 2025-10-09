export const codeWithBuilder = {
  title: 'Com o uso do Builder',
  code: `
private User createUser(RegisterRequest request) {
    User user = User.builder()
        .email(request.getEmail())
        .passwordHash(passwordEncoder.encode(request.getPassword()))
        .fullName(request.getFullName())
        .role(parseUserRole(request.getRole()))
        .status(User.UserStatus.ACTIVE)
        .build();

    return userRepository.save(user);
}`.trim(),
};
